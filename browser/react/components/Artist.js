import React, { Component } from 'react';
import { Link } from 'react-router';
import Albums from './Albums.js'
import Songs from './Songs.js'

export default class Artist extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getArtistData(this.props.routeParams.artistId)
  }

  render() {
    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
      albums: this.props.albums,
      currentSong: this.props.currentSong
    }
    console.log('children=====', children)
    return <div>
      <h3>{ selectedArtist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
      </ul>
      { children && React.cloneElement(children, propsToPassToChildren) }
    </div>



  }
}


  // const artist = this.props.selectedArtist;
  //   const artistAlbums = this.props.albums;
  //   const songsArray = artistAlbums.map((album) => album.songs);
  //   const songElements = songsArray.map((eachAlbumSongs) => <Songs songs={eachAlbumSongs} currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne}/>
  //   )

  //   return (
  //     <div>
  //       <h3>{ artist.name }</h3>
  //       <Albums albums={artistAlbums}/>
  //       <h4>SONGS</h4>
  //        {songElements}

  //     </div>
  //   )
