import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, subtitle }) => (
    <section className="hero-with-bg-img is-medium">
        <div className="hero-body">
            <div className="container has-text-centered"><h1 className="title">{ title }</h1> <h2
                className="subtitle">{ subtitle }</h2></div>
        </div>
    </section>
)

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Hero
