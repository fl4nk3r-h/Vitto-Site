'use client';

import { Button } from '@/components/ui/button';
import { Building2, MapPin, Users } from 'lucide-react';
import { DarkDropdown } from '@/components/ui/dark-dropdown';

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
    { label: 'Bank', value: 'Bank' },
    { label: 'NBFC', value: 'NBFC' },
    { label: 'Credit Union', value: 'Credit Union' },
    { label: 'Fintech', value: 'Fintech' },
    { label: 'Insurance', value: 'Insurance' },
    { label: 'Other', value: 'Other' },
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
          City
        </label>
        <div className="relative group">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none transition-colors duration-200 group-focus-within:text-red-500" />
          <input
            type="text"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
            placeholder="City"
            className="w-full pl-12 pr-4 py-3 text-base border border-white/10 rounded-xl bg-white/5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:shadow-[0_0_0_2px_#D32F2F33] transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-red-glow"
            disabled={isLoading}
            autoComplete="address-level2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Institution Name
        </label>
        <div className="relative group">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none transition-colors duration-200 group-focus-within:text-red-500" />
          <input
            type="text"
            value={formData.institutionName}
            onChange={(e) => onChange('institutionName', e.target.value)}
            placeholder="Your Bank/NBFC Name"
            className="w-full pl-12 pr-4 py-3 text-base border border-white/10 rounded-xl bg-white/5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:shadow-[0_0_0_2px_#D32F2F33] transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-red-glow"
            disabled={isLoading}
            autoComplete="organization"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Institution Type
        </label>
        <DarkDropdown
          value={formData.institutionType}
          options={institutionTypes}
          onChange={val => onChange('institutionType', val)}
          placeholder="Select type"
          disabled={isLoading}
        />
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
          className="w-full px-4 py-3 text-base border border-white/10 rounded-xl bg-white/5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 focus:shadow-[0_0_0_2px_#D32F2F33] transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-red-glow"
          disabled={isLoading}
          autoComplete="tel"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Loan Book Size (AUM)
        </label>
        <DarkDropdown
          value={formData.loanBookSize}
          options={[
            { value: '', label: 'Select range...' },
            { value: '< 100 Cr', label: 'Less than ₹100 Crore' },
            { value: '100-500 Cr', label: '₹100 - 500 Crore' },
            { value: '500-1000 Cr', label: '₹500 - 1000 Crore' },
            { value: '1000-5000 Cr', label: '₹1000 - 5000 Crore' },
            { value: '> 5000 Cr', label: 'More than ₹5000 Crore' },
          ]}
          onChange={val => onChange('loanBookSize', val)}
          placeholder="Select range..."
          disabled={isLoading}
          leftIcon={<Users className="w-5 h-5 text-muted-foreground mr-2" />}
        />
      </div>

      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        onClick={onSubmit}
        disabled={!isValid || isLoading}
        className="w-full py-3 text-base font-semibold rounded-xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-500/10 hover:scale-[1.02] hover:shadow-red-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/40 disabled:opacity-60 disabled:shadow-none disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </Button>
    </div>
  );
}
