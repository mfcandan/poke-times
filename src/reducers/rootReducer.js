const initState = {
    posts: [
        {id:'1', title:'Squirtle', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lectus consectetur, feugiat velit ut, fermentum nulla. Suspendisse elementum sit amet eros ac congue. Sed semper, eros eget laoreet efficitur, urna orci interdum libero, elementum porta libero nibh et justo. Donec aliquet ipsum et hendrerit dapibus. Cras rhoncus felis sit amet risus vehicula, quis pulvinar magna pretium. Pellentesque laoreet neque sed viverra suscipit. Nunc commodo nunc vehicula sem pellentesque feugiat. Aenean rhoncus ultrices sapien, id vestibulum arcu tincidunt eu. Nam a commodo turpis, auctor feugiat ipsum. Nam nulla elit, vehicula ac vehicula nec, condimentum eget leo.'},
        {id:'2', title:'Pikachu', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lectus consectetur, feugiat velit ut, fermentum nulla. Suspendisse elementum sit amet eros ac congue. Sed semper, eros eget laoreet efficitur, urna orci interdum libero, elementum porta libero nibh et justo. Donec aliquet ipsum et hendrerit dapibus. Cras rhoncus felis sit amet risus vehicula, quis pulvinar magna pretium. Pellentesque laoreet neque sed viverra suscipit. Nunc commodo nunc vehicula sem pellentesque feugiat. Aenean rhoncus ultrices sapien, id vestibulum arcu tincidunt eu. Nam a commodo turpis, auctor feugiat ipsum. Nam nulla elit, vehicula ac vehicula nec, condimentum eget leo.'},
        {id:'3', title:'Charmender', body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a lectus consectetur, feugiat velit ut, fermentum nulla. Suspendisse elementum sit amet eros ac congue. Sed semper, eros eget laoreet efficitur, urna orci interdum libero, elementum porta libero nibh et justo. Donec aliquet ipsum et hendrerit dapibus. Cras rhoncus felis sit amet risus vehicula, quis pulvinar magna pretium. Pellentesque laoreet neque sed viverra suscipit. Nunc commodo nunc vehicula sem pellentesque feugiat. Aenean rhoncus ultrices sapien, id vestibulum arcu tincidunt eu. Nam a commodo turpis, auctor feugiat ipsum. Nam nulla elit, vehicula ac vehicula nec, condimentum eget leo.'}    
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state,
            posts: newPosts
        }
    }
    return state;
}
 
export default rootReducer;