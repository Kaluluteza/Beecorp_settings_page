// src/pages/SettingsPage.jsx
import React from 'react';
import EditPasswordForm from '../components/EditPasswordForm';
import EmailSettingsForm from '../components/EmailSettingsForm';
import DeleteAccountForm from '../components/DeleteAccountForm';
import DeletedMedia from '../components/DeletedMedia';
import AnimatedSection from '../components/AnimatedSection';
import SettingsSidebar from '../components/SettingsSidebar';
import SidebarToggle from '../components/SidebarToggle';

export default function SettingsPage() {
  return (
     <div>       
{children}
      {/* Sidebar */}
      <SettingsSidebar />

      {/* Main content */}
      <main className="ml-64 min-h-screen bg-gray-100 dark:bg-black p-6 space-y-6 w-full">
        <section id="edit-password">
          <AnimatedSection title="Edit Password" delay={0.1}>
            <EditPasswordForm />
          </AnimatedSection>
        </section>

        <section id="email-settings">
          <AnimatedSection title="Email Settings" delay={0.3}>
            <EmailSettingsForm />
          </AnimatedSection>
        </section>

        <section id="delete-account">
          <AnimatedSection title="Delete Account" delay={0.5}>
            <DeleteAccountForm />
          </AnimatedSection>
        </section>

        <section id="deleted-media">
          <DeletedMedia />
        </section>
      </main>
    </div>
  );
}

