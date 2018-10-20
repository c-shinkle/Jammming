import React from 'react';
import renderer from 'react-test-renderer';
import Track from './Track';

const trackData = {
  songTitle: 'Sound of Madness',
  artist: 'Shinedown',
  album: 'Sound of Madness',
};

const track = <Track track={trackData}/>;

test('that the props were properly assigned.', () => {
  const trackDataInst = renderer.create(track);
  const tree = trackDataInst.toJSON();
  expect(tree.props.songTitle).toBe('Sound of Madness');
  expect(tree.props.artist).toBe('Shinedown');
  expect(tree.props.album).toBe('Sound of Madness');
});
