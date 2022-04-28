import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostByid, isLoading, error] = useFetching( async (id) => {
        const  response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commenstError] = useFetching( async (id) => {
        const  response = await PostService.getCommentsById(id);
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostByid(params.id);
        fetchComments(params.id)

    }, [])
    return (
        <div>
            <h1>
               You open post {params.id}
            </h1>
            { isLoading
                ? <Loader/>
                : <div>{post.id} . {post.title}</div>

            }
            <h1> Comments</h1>
            { isCommentsLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}} key={comm.email}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>

                        </div>
                    )}
                </div>

            }
        </div>
    );
};

export default PostIdPage;