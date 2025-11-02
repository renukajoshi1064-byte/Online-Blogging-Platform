import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const editorRef = useRef(null)
  const quillRef = useRef(null)
   const navigate =useNavigate()

  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)

  const generateContent = async () => {
    // For now, placeholder for AI content generation
    alert('AI content generation coming soon!')
  }

 
  const onSubmithandler = async (e) => {
    e.preventDefault()
    const content = quillRef.current?.root.innerHTML

    let base64Image = '';
    if (image) {
      const reader =new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () =>
      {
        base64Image = reader.result;
      
    
    
    const newBlog = {
      _id:Date.now().toString(),
      title,
      subTitle,
      category,
      isPublished,
      description:content,
      image: base64Image,
      createdAt : new Date().toISOString(),
    }
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || []
    storedBlogs.unshift(newBlog)
    localStorage.setItem('blogs',JSON.stringify(storedBlogs))

    alert('Blog added successfully!')
    navigate('/');
    window.location.reload();
    setTitle('')
    setSubTitle('')
    setCategory('Startup')
    quillRef.current.root.innerHTML = ''
    setImage(null)
  }
}
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Write your blog content here...',
      })
    }
  }, [])

  return (
    <form
      onSubmit={onSubmithandler}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-y-auto"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            className="mt-2 h-16 rounded cursor-pointer border border-gray-300 object-cover"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4">Subtitle</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        <p className="mt-4">Blog Description</p>
        <div className="max-w-lg h-80 relative mt-2">
          <div ref={editorRef} className="h-64 border border-gray-300 rounded"></div>
          <button
            type="button"
            onClick={generateContent}
            className="absolute bottom-2 right-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:bg-black transition"
          >
            Generate with AI
          </button>
        </div>
        <p className='mt-4'>Blog Category</p>
        <select onChange={e => setCategory(e.target.value)} name='category' className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'>
          <option>Select Category</option>
          {blogCategories.map((item,index)=>{
            return <option value={item} key={index}>{item}</option>
          })}
        </select>
        <div className='flex gap-2 mt-4'>
          <p>Publish Now</p>
          <input type='checkbox' checked={isPublished} className='scale-125 cursor-pointer' onChange={e => setIsPublished(e.target.checked)}/>
        </div>
        <button type='submit'  className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'>Add Blog</button>

      </div>
    </form>
  )
}

export default AddBlog
