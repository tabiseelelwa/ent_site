import React from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AjoutArticle = () => {

    const module = {
        toolbar: [
          [{ 'header': [1, 2,3, false] }],
          ['bold', 'italic', 'underline','strike', {'color': []}, {'font': []}],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, {'script' : 'sub'}, {'script' : 'super'}],
          ['link', 'image'], [{'align': []}, 'blockquote', 'code-block']
        ]
      }

    return (
        <div className='mainPart redaction'>
            <form>
              <h3>Création d'un nouvel article</h3>
              <input type="text" placeholder="Le titre de l'article"/>
              <select name="" id="">
                <option >-- Choisir la catégorie de votre article --</option>
                <option value="">Formation</option>
                <option value="">Communiqué</option>
                <option value="">Evènement</option>
              </select>
              <ReactQuill theme='snow' className='' modules={module} />
              <button>Soumettre</button>
            </form>
        </div>
    )
}

export default AjoutArticle