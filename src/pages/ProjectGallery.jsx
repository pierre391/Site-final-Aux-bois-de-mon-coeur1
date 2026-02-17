import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ProjectGallery = () => {
  const { categorySlug } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getCategoryDescription = (slug) => {
    const descriptions = {
      'claustra': "Le claustra, élégance et fonctionnalité\nUn claustra apporte une touche d'élégance à ton intérieur ou extérieur, tout en jouant un rôle pratique. Fabriqué sur mesure, il permet de délimiter un espace avec légèreté, en laissant passer la lumière et l'air. Idéal pour créer une séparation discrète ou une décoration murale unique, le claustra allie esthétique et durabilité grâce à des matériaux nobles comme le bois massif. Personnalisable à l'infini, il s'adapte à tous les styles et à toutes les envies.",
      'table': "De la conception à la réalisation, je vous accompagne dans la création de votre table idéale. En associant vos idées à mon savoir-faire technique, nous façonnons une pièce unique, adaptée à vos dimensions et à vos usages.",
      'verriere': "Apportez de la lumière et du caractère à votre intérieur avec une séparation artisanale unique. Je mets mon expertise à votre service pour concevoir une verrière sur mesure qui respecte l'architecture de votre pièce et vos besoins de modularité, alliant la chaleur du bois à la finesse du design.",
      'meuble': "Qu'il s'agisse d'un buffet, d'une bibliothèque ou d'un aménagement spécifique, je donne vie à vos projets de mobilier en bois massif. Mon approche privilégie l'équilibre entre esthétique et fonctionnalité, pour créer des pièces pérennes qui s'intègrent avec justesse dans votre environnement.",
      'restauration': "Redonnez vie à vos meubles anciens tout en préservant leur âme et leur authenticité. J'interviens avec soin pour stabiliser les structures et restaurer les finitions d'origine, en utilisant des techniques traditionnelles respectueuses de l'histoire de chaque pièce.",
      'plateau-tablette': "Qu'il s'agisse d'un plan de travail, d'une étagère ou d'un dessus de meuble, je sélectionne des bois de qualité pour réaliser vos éléments à la découpe. Chaque plateau est travaillé avec soin pour sublimer le veinage naturel du bois tout en garantissant une robustesse adaptée à vos projets d'aménagement."
    };
    return descriptions[slug] || `Découvrez nos créations sur mesure en ${slug}`;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const { data: categoryData, error: categoryError } = await supabase
          .from('categories')
          .select('id, name')
          .eq('slug', categorySlug)
          .maybeSingle();

        if (categoryError) throw categoryError;
        if (!categoryData) {
          setProjects([]);
          setLoading(false);
          return;
        }

        setCategoryName(categoryData.name);

        const { data: projectsData, error: projectsError } = await supabase
          .from('projects')
          .select('*')
          .eq('category_id', categoryData.id)
          .order('display_order', { ascending: true });

        if (projectsError) throw projectsError;
        setProjects(projectsData || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [categorySlug]);

  const filteredProjects = projects;

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="container">
          <Link to="/" className="back-link"><ArrowLeft size={18} /> Retour</Link>
          <h1>{categoryName || capitalize(categorySlug)}</h1>
          <p className="page-subtitle max-w-3xl mx-auto leading-relaxed text-center" style={{ whiteSpace: 'pre-line' }}>{getCategoryDescription(categorySlug)}</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          {loading ? (
            <div className="loading-state" style={{ textAlign: 'center', padding: '3rem' }}>
              <p>Chargement des projets...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="empty-state" style={{ textAlign: 'center', padding: '3rem' }}>
              <p>Aucun projet disponible dans cette catégorie.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className="project-card"
                  whileHover={{ y: -8 }}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                >
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX INTERACTIVE */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightbox-overlay" onClick={() => setSelectedProject(null)} />
            
            <motion.div className="lightbox-content" layoutId={selectedProject.id}>
              <button className="lightbox-close" onClick={() => setSelectedProject(null)}><X /></button>
              
              <div className="lightbox-main">
                <motion.div
                  className="lightbox-image-container"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000 && currentImageIndex < selectedProject.images.length - 1) {
                      setCurrentImageIndex(prev => prev + 1);
                    } else if (swipe > 10000 && currentImageIndex > 0) {
                      setCurrentImageIndex(prev => prev - 1);
                    }
                  }}
                >
                  <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} />

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="lightbox-nav lightbox-prev-image"
                        onClick={() => setCurrentImageIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentImageIndex === 0}
                        style={{ opacity: currentImageIndex === 0 ? 0.3 : 1 }}
                      >
                        <ChevronLeft />
                      </button>

                      <button
                        className="lightbox-nav lightbox-next-image"
                        onClick={() => setCurrentImageIndex(prev => Math.min(selectedProject.images.length - 1, prev + 1))}
                        disabled={currentImageIndex === selectedProject.images.length - 1}
                        style={{ opacity: currentImageIndex === selectedProject.images.length - 1 ? 0.3 : 1 }}
                      >
                        <ChevronRight />
                      </button>

                      <div className="lightbox-image-counter">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </motion.div>

                <div className="lightbox-details">
                  <h2>{selectedProject.title}</h2>
                  {(selectedProject.wood_type || selectedProject.dimensions || selectedProject.finish || selectedProject.technical_details) ? (
                    <>
                      <div className="project-specs">
                        {selectedProject.wood_type && (
                          <div className="spec-item"><strong>Essence</strong> <span>{selectedProject.wood_type}</span></div>
                        )}
                        {selectedProject.dimensions && (
                          <div className="spec-item"><strong>Dimensions</strong> <span>{selectedProject.dimensions}</span></div>
                        )}
                        {selectedProject.finish && (
                          <div className="spec-item"><strong>Finition</strong> <span>{selectedProject.finish}</span></div>
                        )}
                        {selectedProject.technical_details && (
                          <div className="spec-item"><strong>Détails techniques</strong> <span>{selectedProject.technical_details}</span></div>
                        )}
                      </div>
                      {selectedProject.description && (
                        <div className="project-description">
                          <p>{selectedProject.description}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    selectedProject.description && (
                      <div className="project-specs">
                        <div className="spec-item"><strong>Description</strong> <span>{selectedProject.description}</span></div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;
