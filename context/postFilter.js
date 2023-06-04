import React, {createContext, useState} from "react";

const PostsFilterContext = createContext();
const PostsFilterContextProvider = ({children})=>{
    const [blogPosts, setBlogPost] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState();
    const [perPage, setPerPage] = useState(1);
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    const values = {
        selectedCategory, setSelectedCategory
    }

    return (
        <PostsFilterContext.Provider value={values}>
            {children}
        </PostsFilterContext.Provider>
    )
}

export {PostsFilterContext, PostsFilterContextProvider}