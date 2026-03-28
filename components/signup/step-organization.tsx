'use client';

import { Button } from '@/components/ui/button';
import { Building2, MapPin, Users } from 'lucide-react';

interface StepOrganizationProps {
  formData: {
    institutionName: string;
    institutionType: string;
    city: string;
    phoneNumber: string;
    loanBookSize: string;
  };
  onChange: (field: string, value: string) => void;
  onSubmit: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function StepOrganization({
  formData,
  onChange,
  onSubmit,
  isLoading,
  error
}: StepOrganizationProps) {
  const institutionTypes = [
    'Bank',
    'NBFC',
    'Credit Union',
    'Fintech',
    'Insurance',
    'Other'
  ];

  const isValid = 
    formData.institutionName.trim() &&
    formData.institutionType &&
    formData.city.trim() &&
    formData.phoneNumber.trim() &&
    formData.loanBookSize;

  return (
    <div className="fade-in-up space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Institution Name
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={formData.institutionName}
            onChange={(e) => onChange('institutionName', e.target.value)}
            placeholder="Your Bank/NBFC Name"
            className="w-full pl-10 pr-4 py-2 border border-border/40 rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            disabled={isLoading}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Institution Type
        </label>
        <select
          value={formData.institutionType}
          onChange={(e) => onChange('institutionType', e.target.value)}
          className="w-full px-4 py-2 border border-border/40 rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          disabled={isLoading}
        >
          <option value="">Select type...</option>
          {institutionTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          City
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
            placeholder="Mumbai, Bangalore, etc."
            className="w-full pl-10 pr-4 py-2 border border-border/40 rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            disabled={isLoading}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => onChange('phoneNumber', e.target.value)}
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-2 border border-border/40 rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          disabled={isLoading}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Loan Book Size (AUM)
        </label>
        <div className="relative">
          <Users className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <select
            value={formData.loanBookSize}
            onChange={(e) => onChange('loanBookSize', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border/40 rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            disabled={isLoading}
          >
            <option value="">Select range...</option>
            <option value="< 100 Cr">Less than ₹100 Crore</option>
            <option value="100-500 Cr">₹100 - 500 Crore</option>
            <option value="500-1000 Cr">₹500 - 1000 Crore</option>
            <option value="1000-5000 Cr">₹1000 - 5000 Crore</option>
            <option value="> 5000 Cr">More than ₹5000 Crore</option>
          </select>
        </div>
      </div>

      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        onClick={onSubmit}
        disabled={!isValid || isLoading}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </div>
  );
}
