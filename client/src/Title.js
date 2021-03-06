import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '3px solid black',
    color: '#f2f1ef',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '100vw',
    textShadow: '2px 2px 4px #000000',
    fontFamily: 'Roboto Mono',
    background: 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)'
  }
}

const Title = () =>
  <div style={styles.container}>
    <h1>MMA Fighters & Boxers</h1>
  </div>

export default Title
