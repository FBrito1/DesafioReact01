import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import '../src/styles.scss';

import Post from '../src/components/Post';
import Header from '../src/components/Header';

class App extends Component {
  state = {
    posts: [
      {
        name: 'Batman',
        postAvatar: 'https://i.pinimg.com/originals/25/0e/9c/250e9cdce140d70fa8af1d7af02deb38.jpg',
        postTime: 'há 3min',
        postBody: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.',
      },
      {
        name: 'Jules Winnfield',
        postAvatar: 'https://vignette.wikia.nocookie.net/pulpfiction/images/b/b6/Jules.jpg/revision/latest?cb=20090501131406',
        postTime: 'há 10min',
        postBody: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        name: 'Roy Betty',
        postAvatar: 'https://pbs.twimg.com/profile_images/922521561386627074/v1b_FwQj_400x400.jpg',
        postTime: 'há 20min',
        postBody: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum.',
      },
    ],
  };

  renderPosts = () => this.state.posts.map(post => (
    <Post data={post} key={post.name} />
  ));

  render() {
    return (
      <Fragment>
        <Header />
        {this.renderPosts()}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
