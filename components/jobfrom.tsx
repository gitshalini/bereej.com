'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function JobForm() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
      <form className="space-y-4">
        <Input placeholder="First Name" required />
        <Input placeholder="Last Name" required />
        <Input type="email" placeholder="Email Address" required />
        <Textarea placeholder="Message (optional)" rows={4} />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
          <Input 
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          {file && <p className="text-sm mt-1 text-gray-600">Selected: {file.name}</p>}
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Apply
        </Button>
      </form>
    </div>
  );
}
