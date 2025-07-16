'use client';

import { useState, useEffect } from 'react';
import { getContentType } from '../lib/strapi';

export default function StrapiServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await getContentType('services', {
        populate: '*',
        sort: ['createdAt:desc']
      });
      
      setServices(response.data || []);
    } catch (err) {
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading services...</div>;
  }

  return (
    <div className="services-grid">
      <h2>Our Services from Strapi</h2>
      {services.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">No services found yet.</p>
          <p className="text-sm text-gray-500">
            Create services in your Strapi admin panel to see them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card border p-4 rounded-lg">
              <h3 className="text-xl font-bold">{service.attributes?.title}</h3>
              <p className="mt-2">{service.attributes?.description}</p>
              {service.attributes?.price && (
                <p className="text-lg font-semibold mt-2">
                  Price: ${service.attributes.price}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 