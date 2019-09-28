import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  }, {
    id: 2,
    title: '社会2热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },{
    id: 3,
    title: '社会热3点',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp'
  }, {
    id: 4,
    title: '社会4热点',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  }],
  articleList:[{
    id:1,
    title:'去哦继电器期间欧辰骄傲CDC继电器期间欧辰骄傲大阿福',
    desc:'继电器期间继电器期间欧辰骄傲继傲继电器期间欧辰骄傲欧辰骄傲继电器期间欧辰骄傲继电器期间欧电器期间欧辰骄傲欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲',
    imgUrl:'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
  },{
    id:2,
    title:'去哦继电器期间欧辰骄傲CDC继电器期间欧辰骄傲大阿福',
    desc:'11继电器期间继电器期间欧辰骄傲继傲继电器期间欧辰骄傲欧辰骄傲继电器期间欧辰骄傲继电器期间欧电器期间欧辰骄傲欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲继电器期间欧辰骄傲',
    imgUrl:'https://upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/2/format/webp'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}