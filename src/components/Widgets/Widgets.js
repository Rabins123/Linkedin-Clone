import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle =  (heading, subtitle) =>{
        return(
        <div className="widgets__article">
            
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
        )
    }

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>

            {newsArticle ("How to Close the Data Science Skills Gap in the Technology Sector?", "Top news - 1800+ readers")}
            {newsArticle ("Over 70% of Gen-Z still aspiring for tech jobs in India despite mass layoffs: NASSCOM Study", "Jobs - 900+ readers")}
            {newsArticle ("Why Fintech Will Find MERN Stack Ideal for their App Projects?", "Web Development - 782 readers")}
            {newsArticle ("What is the relationship between blockchain and Web3?", "Article - 541 readers")}
            {newsArticle ("Backpropagation in a Neural Network: Explained", "Deep Learning - 120 readers")}
        </div>
    )
}

export default Widgets