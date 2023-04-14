import React, { FC, useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import SitesList from '../../src/components/SitesList';
import Site from '../../src/models/Site';
import { useDB } from '../../src/providers/DatabaseProvider';
import Progress from '../../src/ui/Progress';

const Home: FC = () => {
  const { listSites } = useDB();
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sites.length) {
      setLoading(true);
      listSites().then(list => {
        setSites(list);
        setLoading(false);
      });
    }
  }, [listSites, sites.length]);

  const deleteSite = (site: Site) => {
    setSites(sites.filter(s => site.label !== s.label));
  };

  if (loading) return <ActivityIndicator />;

  return (
    <>
      <Progress />
      <SitesList sites={sites} deleteSite={deleteSite} />
    </>
  );
};

export default Home;
