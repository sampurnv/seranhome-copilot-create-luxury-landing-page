import React from 'react';

const Showcase = () => {
  const projects = [
    {
      title: 'Skyline Penthouse',
      location: 'Bengaluru',
      bgClass: 'penthouse-bg',
      image: 'https://plus.unsplash.com/premium_photo-1661872779873-5ce7b9235a0e?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Contemporary Villa',
      location: 'Bengaluru',
      bgClass: 'villa-bg',
      image: 'https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=2167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Private Estate',
      location: 'Bengaluru',
      bgClass: 'estate-bg',
      image: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Exceptional Homes</h2>
          <p className="section-subtitle">A curated selection of our most distinguished projects.</p>
        </div>
        <div className="showcase-grid">
          {projects.map((project, index) => (
            <div key={index} className="showcase-item">
              <div className={`showcase-image ${project.bgClass}`} style={{position:'relative',overflow:'hidden'}}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'0.5rem',position:'absolute',top:0,left:0}} 
                />
              </div>
              <div className="showcase-info">
                <h4>{project.title}</h4>
                <p>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
