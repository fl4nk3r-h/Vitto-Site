import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface Option {
  label: string;
  value: string;
}

interface DarkDropdownProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function DarkDropdown({ value, options, onChange, placeholder, disabled }: DarkDropdownProps) {
  const selected = options.find(opt => opt.value === value) || null;
  return (
    <div className="relative">
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={[
                'w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#0b0f1a]/80 border border-white/10 text-left text-base',
                'text-foreground placeholder:text-muted-foreground/70',
                'focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30',
                'transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-red-glow',
                disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
              ].join(' ')}
            >
              <span className={selected ? '' : 'text-muted-foreground/70'}>
                {selected ? selected.label : placeholder || 'Select...'}
              </span>
              <ChevronDown className="w-5 h-5 ml-2 text-muted-foreground transition-colors duration-200" />
            </Listbox.Button>
            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 mt-2 w-full z-50 rounded-xl bg-[#0b0f1a]/95 border border-white/10 shadow-xl backdrop-blur-lg py-2 max-h-60 overflow-auto focus:outline-none">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={({ active, selected }) => [
                      'px-4 py-2 text-base cursor-pointer select-none flex items-center',
                      active ? 'bg-red-500/15 text-white' : selected ? 'text-white/90 bg-white/5' : 'text-white/70',
                      'transition-colors duration-150 rounded-lg'
                    ].join(' ')}
                  >
                    {option.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
}
