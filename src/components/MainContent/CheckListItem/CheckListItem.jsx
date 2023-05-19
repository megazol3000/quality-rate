import React from 'react';

function CheckListItem({ data }) {
  return (
    <div>{data.position}. {data.name}</div>
  )
}

export default CheckListItem;