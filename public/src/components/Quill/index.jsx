import React from 'react';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, false] }],
    ['bold', 'italic', 'underline'],
    [{ align: [] }],
    [{ direction: 'rtl' }],
    [{ color: [] }, { background: [] }],
    ['image'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote'],
    ['clean']
  ]
};

export default props => {
  let { onChange, value, label } = props;
  return <ReactQuill value={value} onChange={onChange} modules={modules} placeholder={label} />;
};
