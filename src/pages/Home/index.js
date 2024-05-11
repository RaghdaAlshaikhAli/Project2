import React, { useState } from 'react'
import Menu from '../../components/menu'
import FoodList from '../../components/foodList'
import './style.css'
import Footer from '../../components/footer'
import { motion } from 'framer-motion'

const Home = () => {
    const [category, setCategory] = useState('All')
    return (
        <>
            <motion.div className='Container'
                initial={{ y: 200 }}
                whileInView={{ y: 0, transition: { duration: 0.8, ease: "backOut" } }}
                viewport={{ once: true }}
            >
                <Menu category={category} setCategory={setCategory} />
                <FoodList category={category} />
            </motion.div>
            <Footer />
        </>
    )
}

export default Home
