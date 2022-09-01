import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className={'pizza-block'}
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="136" cy="126" r="125" />
    <rect x="0" y="264" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="302" rx="10" ry="10" width="280" height="88" />
    <rect x="2" y="417" rx="10" ry="10" width="95" height="30" />
    <rect x="127" y="408" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
