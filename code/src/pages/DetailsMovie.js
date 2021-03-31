import React from 'react';
import { useParams } from 'react-router-dom';

import { URL_MOVIE } from 'utils/apiConfig';
import { useFetch } from 'utils/hooks';

import ReturnButton from 'components/ReturnButton';
import LoaderSpinner from 'components/LoaderSpinner';
import SectionDetails from 'components/SectionDetails';

const Movie = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(
    `${URL_MOVIE(id)}?api_key=ad4add0250df7c550404efa399902a8a`
  );

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
        <div>
          {console.log(data)}
          <ReturnButton path="/" />
          <SectionDetails {...data} />
          {/* SectionCollection if(data.belongs_to_collection !== null) */}
        </div>
      )}
    </>
  );
};

export default Movie;
