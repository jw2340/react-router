import React from 'react';
import Songs from '../components/Songs';
import axios from 'axios';


class Album extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount (props) {
    this.props.selectAlbum(this.props.routeParams.albumId)
  }
  render() {
  const album = this.props.album;
  const currentSong = this.props.currentSong;
  const isPlaying = this.props.isPlaying;
  const toggleOne = this.props.toggleOne;

  return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <button className="btn btn-default">
            <a href={`mailto:someone@example.com?Subject=Hello, check out this${album.name}`}><span className="glyphicon glyphicon-step-backward"></span></a>
          </button>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
    );
  }
}

export default Album;
