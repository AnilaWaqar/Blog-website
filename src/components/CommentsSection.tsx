import { useState } from 'react';
import { CircleUserRound } from 'lucide-react';

const CommentsSection = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-white text-2xl font-semibold'>Comments</h2>
            <div >
                <input
                className='py-2 sm:px-6 px-4 sm:w-[400px] w-[50%] text-[16px] outline-none border-none focus:shadow-[0px_0px_10px_2px_#BC382E] '
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment"
                />
                <button className='bg-[#BC382E] text-white text-[16px] py-2 sm:px-6 px-4 ' onClick={handleAddComment}>Add Comment</button>
            </div>
            <ul className=' flex flex-col gap-4 sm:w-[550px] w-full py-4 px-6 bg-[#BC382E] text-[#BC382E] h-auto'>
                {comments.map((comment, index) => (
                    <li className='flex items-center gap-3 bg-white px-4 py-2' key={index}>
                    <div className=' bg-[#bc382e] rounded-full text-white'>
                    <CircleUserRound className='sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]' />
                    </div>
                    <div className='leading-5'>
                    <p>You</p>
                    <p className='text-[16px] text-gray-600'>{comment}</p>
                    </div>
                    </li>
                ))}
                <li className='flex items-center gap-3 bg-white px-4 py-2' >
                <div className=' bg-[#bc382e] rounded-full text-white'>
                    <CircleUserRound className='sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]' />
                    </div>
                    <div className='leading-5'>
                    <p>Ali</p>
                    <p className='text-[16px] text-gray-600'>Very Informative</p>
                    </div>
                    </li>
                <li className='flex items-center gap-3 bg-white px-4 py-2' >
                <div className=' bg-[#bc382e] rounded-full text-white'>
                    <CircleUserRound className='sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]' />
                    </div>
                    <div className='leading-5'>
                    <p>Steve</p>
                    <p className='text-[16px] text-gray-600'>Intresting topic</p>
                    </div>
                    </li>
                <li className='flex items-center gap-3 bg-white px-4 py-2' >
                <div className=' bg-[#bc382e] rounded-full text-white'>
                    <CircleUserRound className='sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]' />
                    </div>
                    <div className='leading-5'>
                    <p>Joseph</p>
                    <p className='text-[16px] text-gray-600'>I really enojoyed reading</p>
                    </div>
                    </li>
            </ul>
        </div>
    );
};

export default CommentsSection;
