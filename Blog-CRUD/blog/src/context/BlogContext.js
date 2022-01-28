import React,{useReducer} from "react";

import AutomateContext from "./AutomateContext";
// const BlogContext = React.createContext();

const BlogReducer = (state, action) => {

    switch(action.type){
        case 'edit_BlogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ?
                action.payload :
                blogPost;
            })
        case 'delete_BlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'add_BlogPost':
            return [...state, {id: Math.floor(Math.random()*99999) , title: action.payload.title , content: action.payload.content }]
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_BlogPost', payload: {title, content}}) 
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: 'delete_BlogPost', payload: id})
}
const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'edit_BlogPost',
            payload: {id, title, content}
        })
        callback();
    }
}

export const { Context, Provider} = AutomateContext( BlogReducer, {addBlogPost, deleteBlogPost, editBlogPost}, [{title: 'Initial Welcome Blog', content: 'Welcome to CRUD Operation in form of Blog App', id: 1}])
// export const BlogProvider = ({children}) => {

//     const [BlogPosts, dispatch] = useReducer(BlogReducer, [])

   
//     // const BlogPosts = [
//     //     {title: 'Blog 1'},
//     //     {title: 'Blog 2'}
//     // ]
//     return (
//         <BlogContext.Provider value = {{data: BlogPosts, addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//     )
// }

// export default BlogContext;