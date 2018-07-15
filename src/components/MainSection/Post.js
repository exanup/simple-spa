// import React, { Component, Fragment } from 'react'

// export default class Post extends Component {
//   render () {
//     const id = this.props.id
//     const title = this.props.title
//     const body = this.props.body
//     const author = this.props.author_id
//     const createdAt = this.props.created_at
//     const lastUpdatedAt = this.props.updated_at

//     const postHref = `posts/${id}`

//     return (
//       <Fragment>
//         <div className="column is-half">
//           <p className="title is-4">
//             <a href={postHref}>{title}</a>
//           </p>
//           <p className="subtitle is-7">
//             <span>{author}</span>
//             <span>{createdAt}</span>
//             <span>{lastUpdatedAt}</span>
//           </p>
//           <div className="content">
//             {body}
//             <br />
//             <a href={postHref}>More...</a>
//           </div>
//         </div>
//       </Fragment>
//     )
//   }
// }
