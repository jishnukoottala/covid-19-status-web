import React, { useEffect } from "react";
import packageJson from "../package.json";
import axios from "axios";
global.appVersion = packageJson.version;

const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);

  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

const useCacheBuster = () => {
  const [loading, setLoading] = false;
    const [isLatestVersion, setIsLatestVersion] = false;
    
   const  refreshCacheAndReload= () => {
        console.log('Clearing cache and hard reloading...')
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
          });
        }

        // delete browser cache and hard reload
        window.location.reload(true);
      }
    };
  }

  useEffect(() => {
    async function fetchMeta() {
      const res = await axios("/meta.json");
      const meta = await res.json();

      const latestVersion = meta.version;
      const currentVersion = global.appVersion;
      const shouldForceRefresh = semverGreaterThan(
        latestVersion,
        currentVersion
      );

      if (shouldForceRefresh) {
        console.log(
          `We have a new version - ${latestVersion}. Should force refresh`
        );
        setLoading(false);
        setIsLatestVersion(isLatestVersion);
      } else {
        console.log(
          `You already have the latest version - ${latestVersion}. No cache refresh needed.`
        );
        setLoading(false);
        setIsLatestVersion(true);
      }
    }

    fetchMeta();
  }, []);

  return [loading, isLatestVersion, refreshCacheAndReload];
};

export default useCacheBuster;
