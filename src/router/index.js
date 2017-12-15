import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Panel from '@/components/layouts/Panel'
import Auth from '@/components/layouts/Auth'
import Login from '@/components/views/auth/Login'
import Register from '@/components/views/auth/Register'
import ForgotPassword from '@/components/views/auth/ForgotPassword'
import TwoFactorAuthentication from '@/components/views/auth/TwoFactorAuthentication'
import Initialize from '@/components/views/system/Initialize'
import Error404 from '@/components/views/system/Error404'
import Maintenance from '@/components/views/system/Maintain'
import Dashboard from '@/components/views/panel/dashboard/Index'
import Settings from '@/components/views/panel/settings/Index'
import System from '@/components/layouts/System'
import Messaging from '@/components/views/panel/messaging/Index'
import Company from '@/components/views/panel/company/Index'
import Clients from '@/components/views/panel/clients/Index'
import Activity from '@/components/views/panel/activitylog/Index'
import Sessions from '@/components/views/panel/sessions/Index'
import CreateCompany from '@/components/views/panel/company/CreateCompany'
import GeneralSettings from '@/components/views/panel/generalsettings/Index'
import Documentation from '@/components/views/panel/documentation/Index'
import HelpDesk from '@/components/views/panel/helpdesk/Index'
import SupportTicket from '@/components/views/panel/helpdesk/SupportTicket'
import ViewTicket from '@/components/views/panel/helpdesk/ViewTicket'
import UpdateTicket from '@/components/views/panel/helpdesk/UpdateTicket'
import Notifications from '@/components/views/panel/notifications/Index'
import Notification from '@/components/views/panel/notifications/View'
import TeamDashboard from '@/components/views/panel/teams/TeamDashboard'
import TeamClients from '@/components/views/panel/teams/TeamClients'
import TeamMessaging from '@/components/views/panel/teams/TeamMessaging'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'Landing', component: Landing },
		{ path: '/auth', name: 'Auth', component: Auth, children: [
			{ path: '/login', name: 'Login', component: Login },
			{ path: '/register', name: 'Register', component: Register },
			{ path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },
			{ path: '/two-factor-authentication', name: 'TwoFactorAuthentication', component: TwoFactorAuthentication }
		]},
		{ path: '/system', name: 'System', component: System, children: [
  			{ path: '/not-found', name: 'Error404', component: Error404 },
  			{ path: '/initialize', name: 'Initialize', component: Initialize },
  			{ path: '/maintenance', name: 'Maintenance', component: Maintenance }
		]},
		{ path: '/panel', name: 'Panel', component: Panel, redirect: { name: 'Dashboard' }, children: [
			{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
			{ path: '/account', name: 'Account', component: Settings },
			{ path: '/messaging', name: 'Messaging', component: Messaging},
			{ path: '/company', name: 'Company', component: Company},
			{ path: '/company/create', name: 'CreateCompany', component: CreateCompany},
			{ path: '/company/clients', name: 'Clients', component: Clients},
			{ path: '/activity-log', name: 'Activity', component: Activity},
			{ path: '/sessions', name: 'Sessions', component: Sessions},
			{ path: '/settings', name: 'GeneralSettings', component: GeneralSettings},
			{ path: '/documentation', name: 'Documentation', component: Documentation},
			{ path: '/helpdesk', name: 'HelpDesk', component: HelpDesk},
			{ path: '/helpdesk/support-ticket', name: 'SupportTicket', component: SupportTicket},
			{ path: '/helpdesk/view-ticket', name: 'ViewTicket', component: ViewTicket},
			{ path: '/helpdesk/update-ticket', name: 'UpdateTicket', component: UpdateTicket},
			{ path: '/notifications', name: 'Notifications', component: Notifications},
			{ path: '/notification', name: 'Notification', component: Notification},
			{ path: '/team-dashboard', name: 'TeamDashboard', component: TeamDashboard},
			{ path: '/team-clients', name: 'TeamClients', component: TeamClients},
			{ path: '/team-messaging', name: 'TeamMessaging', component: TeamMessaging}
		]}
	]
})
