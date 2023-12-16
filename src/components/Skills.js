import React from 'react'
import py from '../assets/python.png';
import c from '../assets/c.png';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';



export default function Skills() {

  const styles = {
           img:{
              width:'100px',
              height:'100px',
              margin:'0px 30px',

              
            },
            skills:{
              display:'flex',
              margin:'20px 50px',
              flexDirection:'row',
              
            },
            h1:{
              margin:' 0px 30px',
              display:'flex',
              alignItems:'center',
              flexDirection:'column',
              justifyContent: 'center',  
              color:'black',
            
            },
            
          }
  return (
    <>
    
    <div className='container my-5'>
      <h1 style={styles.h1}>
        <strong>skills</strong>
      
        </h1>
      </div>
      <div className='container skills' style={styles.skills}>
        <div>
        <h2 style={styles.h1}>PYTHON</h2>
        <img style={styles.img} src={py} alt="placeholder" />
        </div>
        <div>
        <h2 style={styles.h1}>C</h2>
        <img style={styles.img} src={c} alt="placeholder" />
        </div>
        <div>
        <h2 style={styles.h1}>JAVA</h2>
        <img style={styles.img} src={java} alt="placeholder" />
        </div>
        <div>
        <h2 style={styles.h1}>HTML</h2>
        <img style={styles.img} src={html} alt="placeholder" />
        </div>
        <div>
        <h2 style={styles.h1}>CSS</h2>
        <img style={styles.img} src={css} alt="placeholder" />
        </div>
        <div>
        <h2 style={styles.h1}>JavaScript</h2>
        <img style={styles.img} src={js} alt="placeholder" />
        </div>
        
      </div>
    </>
  )
}
