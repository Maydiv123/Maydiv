import StrapiExample from '../../components/StrapiExample';
import ServerStrapiExample from '../../components/ServerStrapiExample';
import StrapiServices from '../../components/StrapiServices';

export default function TestStrapiPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Strapi Integration Test</h1>
      
      <div className="grid gap-8">
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Client-Side Component</h2>
          <StrapiExample />
        </div>
        
        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Server-Side Component</h2>
          <ServerStrapiExample />
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Services Component</h2>
          <StrapiServices />
        </div>
      </div>
    </div>
  );
} 