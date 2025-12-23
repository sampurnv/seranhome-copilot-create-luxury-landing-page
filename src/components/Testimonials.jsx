import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'The attention to detail is extraordinary. Our home responds to us in ways we never imagined possible.',
      author: 'Rajesh Khanna',
      title: 'CEO, Private Residence'
    },
    {
      text: 'Seran Homes transformed our penthouse into a seamless blend of luxury and technology. Simply exceptional.',
      author: 'Priya Sharma',
      title: 'Designer, Bangalore'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
