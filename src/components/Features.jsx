import React from 'react'

const Features = () => {
  return (
    <>
      <section className="automation-packages" id="automation-packages" style={{background:'#181818', padding:'4rem 0'}}>
        <div className="container">
          <h1 className="section-title" style={{textAlign:'center', color:'#d4af37', marginBottom:'2.5rem'}}>Comfort. Control. Convenience. All in One Touch</h1>

          <div className="package-grid" style={{display:'flex',gap:'2rem',flexWrap:'wrap',justifyContent:'center'}}>
            {/* Basic Package */}
            <div className="package-card" style={{background:'#222',borderRadius:'1.5rem',boxShadow:'0 4px 24px #0002',padding:'2rem',maxWidth:'350px',flex:'1 1 300px',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Basic Home Automation" style={{width:'100%',borderRadius:'1rem',marginBottom:'1.5rem',objectFit:'cover',height:'180px'}}/>
              <h3 style={{color:'#fff',marginBottom:'1rem'}}>Basic Home Automation</h3>
              <ul style={{color:'#eee',marginBottom:'1rem',textAlign:'left',fontSize:'1rem'}}>
                <li>Smart bulbs: 8-10 (living, bedrooms, kitchen)</li>
                <li>Smart switches: 2-4 (lights, fans)</li>
                <li>Smart plugs: 2-4 (appliances)</li>
                <li>Basic smart speaker (Echo/Nest)</li>
                <li>Motion detection: 2 sensors</li>
                <li>Basic security camera: 1 (entry) <span style={{color:'#d4af37'}}>Add On</span></li>
                <li>Smart thermostat: 1 <span style={{color:'#d4af37'}}>Add On</span></li>
              </ul>
              <div style={{color:'#d4af37',fontWeight:'bold',fontSize:'1.1rem',marginBottom:'0.5rem'}}>₹35,999 - ₹50,000</div>
              <div style={{color:'#aaa',fontSize:'0.95rem',textAlign:'center'}}>Ideal for basic lighting, temperature, and security automation without a large investment.</div>
            </div>

            {/* Mid-Range Package */}
            <div className="package-card" style={{background:'#23232b',borderRadius:'1.5rem',boxShadow:'0 4px 24px #0002',padding:'2rem',maxWidth:'350px',flex:'1 1 300px',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Mid-Range Home Automation" style={{width:'100%',borderRadius:'1rem',marginBottom:'1.5rem',objectFit:'cover',height:'180px'}}/>
              <h3 style={{color:'#fff',marginBottom:'1rem'}}>Mid-Range Home Automation</h3>
              <ul style={{color:'#eee',marginBottom:'1rem',textAlign:'left',fontSize:'1rem'}}>
                <li>Smart lighting: 10-12 bulbs (common areas)</li>
                <li>Motorized curtains (living/master bedroom)</li>
                <li>Smart lock: 1 (main door/high-priority room)</li>
                <li>Smart plugs: 4-6 (appliances)</li>
                <li>Smart speakers: 1-2 (Alexa/Google)</li>
                <li>Advanced security: motion + 2-3 cameras <span style={{color:'#d4af37'}}>Add On</span></li>
                <li>HVAC control: smart AC/thermostat (1-2 rooms) <span style={{color:'#d4af37'}}>Add On</span></li>
              </ul>
              <div style={{color:'#d4af37',fontWeight:'bold',fontSize:'1.1rem',marginBottom:'0.5rem'}}>₹65,999 - ₹1,50,000</div>
              <div style={{color:'#aaa',fontSize:'0.95rem',textAlign:'center'}}>Ideal for enhanced security, smart temperature, and voice assistant integration.</div>
            </div>

            {/* Premium Package */}
            <div className="package-card" style={{background:'#26262f',borderRadius:'1.5rem',boxShadow:'0 4px 24px #0002',padding:'2rem',maxWidth:'350px',flex:'1 1 300px',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Premium Home Automation" style={{width:'100%',borderRadius:'1rem',marginBottom:'1.5rem',objectFit:'cover',height:'180px'}}/>
              <h3 style={{color:'#fff',marginBottom:'1rem'}}>Premium Home Automation</h3>
              <ul style={{color:'#eee',marginBottom:'1rem',textAlign:'left',fontSize:'1rem'}}>
                <li>Smart lighting: 12-16 bulbs (all rooms)</li>
                <li>Motorized curtains (all windows)</li>
                <li>Smart locks (all main/key rooms)</li>
                <li>Multi-camera security: 3-5 (indoor/outdoor)</li>
                <li>Smart HVAC: AC/thermostat (2-3 units)</li>
                <li>Smart kitchen appliances (fridge, oven, etc.)</li>
                <li>Energy management system</li>
              </ul>
              <div style={{color:'#d4af37',fontWeight:'bold',fontSize:'1.1rem',marginBottom:'0.5rem'}}>₹1,50,000 - ₹5,00,000+</div>
              <div style={{color:'#aaa',fontSize:'0.95rem',textAlign:'center'}}>Ideal for full automation, high-end security, and seamless integration for ultimate convenience.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
