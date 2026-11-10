import NearbyPage, {generateMetadata as nearbyMetadata} from '@/components/NearbyPage';
const params = Promise.resolve({nearby: 'mezquita-cristo-de-la-luz'});
export function generateMetadata(){return nearbyMetadata({params});}
export default function Page(){return <NearbyPage params={params}/>;}
