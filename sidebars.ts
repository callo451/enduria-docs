import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productSidebar: [
    {type: 'doc', id: 'getting-started/welcome', label: 'Welcome'},
    {type: 'doc', id: 'getting-started/first-steps', label: 'First steps'},
    {type: 'category', label: 'Using Enduria', link: {type: 'doc', id: 'product/overview'}, items: [
      'product/tickets',
      {type: 'category', label: 'Asset management', link: {type: 'doc', id: 'product/assets'}, items: [
        'product/asset-imports', 'product/asset-lifecycle', 'product/asset-approvals', 'product/asset-event-rules',
      ]},
      'product/projects', 'product/knowledge-base', 'product/customer-portal',
    ]},
    'troubleshooting',
  ],
  adminSidebar: [
    {type: 'doc', id: 'admin/overview', label: 'Administration overview'},
    'admin/users-and-permissions', 'admin/branding',
    {type: 'category', label: 'Email', link: {type: 'doc', id: 'admin/email/overview'}, items: [
      'admin/email/outbound', 'admin/email/inbound', 'admin/email/troubleshooting',
    ]},
    'admin/integrations', 'admin/storage',
  ],
  apiSidebar: [
    {type: 'doc', id: 'api/overview', label: 'API overview'},
    'api/quickstart',
    {type: 'category', label: 'Core concepts', items: [
      'api/authentication', 'api/scopes', 'api/requests-and-responses', 'api/pagination-and-polling',
    ]},
    {type: 'category', label: 'Resources', items: [
      'api/resources/tickets', 'api/resources/assets', 'api/resources/projects',
      'api/resources/clients-and-users', 'api/resources/knowledge',
      'api/resources/time-sla-and-reports', 'api/resources/configured-vocabulary',
    ]},
    'api/webhooks',
    {type: 'category', label: 'Reference', items: ['api/endpoint-catalog', 'api/reference']},
  ],
  hostingSidebar: [
    {type: 'doc', id: 'self-hosting/overview', label: 'Self-hosting overview'},
    'self-hosting/configuration', 'self-hosting/email', 'self-hosting/file-storage', 'self-hosting/upgrades', 'self-hosting/backups',
  ],
};

export default sidebars;
