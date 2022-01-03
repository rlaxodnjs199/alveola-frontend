import React from 'react';

function X3D() {
  return (
    <x3d width="400px" height="300px">
      <scene>
        <shape>
          <appearance>
            <material diffuseColor="blue" />
          </appearance>
          <box />
        </shape>
      </scene>
    </x3d>
  );
}

export default X3D;
