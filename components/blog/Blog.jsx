import { data } from 'autoprefixer'
import React from 'react'
import Title from '../commen/Title'
import blog from '../data/blog'
import BLlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className=' max-w-6xl mx-auto'>
            <Title firstdata="my" seconddata="blog" backgroundtext="posts" />
            <div className=' my-12 grid grid-cols-12 gap-10'>
                {
                    blog.map((data, index) => {
                        return (
                            <BLlogCard key={index} {...data} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog