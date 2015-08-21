import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //base
	this.route('index',       { path: '/'});
	this.route('task',  { path: '/ulohy/:task_id'}, function() {
		this.route('statistics', { path: 'statistiky'});
		this.route('submission', { path: 'odevzdani'});
		this.route('discussion', { path: 'diskuse'});
		this.route('solution',   { path: 'reseni'});
		this.route('assignment', {path: ''});
	});
	this.route('tasks', { path: '/ulohy'});
	this.route('results',     { path: '/vysledky'});
	this.route('forum',       { path: '/forum'});
	this.route('faq',         { path: '/faq'});
	this.route('profile',     { path: '/profil'});
	this.route('user-profile',{ path: '/profil/:profile_id'});
  this.route('registration',{ path: '/registrace'});
	this.route('articles',    { path: '/novinky'});
  this.route('article',     { path: '/novinky/:article_id'});
  this.route('settings',    { path: '/nastaveni'});
  this.route('achievements',{ path: '/achievementy'});
  this.route('forgot-password',{ path: '/zapomenute-heslo'});
  this.route('change-password',{ path: '/zmenit-heslo'});
  //admin
  this.route('admin/articles', {path: '/admin/articles'});
  this.route('admin/article-edit', {path: '/admin/article-edit'});
  this.route('admin/correcting', {path: '/admin/correcting'});
  this.route('admin/e-mail', {path: '/admin/e-mail'});
  this.route('admin/export', {path: '/admin/export'});
  this.route('admin/schools', {path: '/admin/schools'});
  this.route('admin/tasks', {path: '/admin/tasks'});
  this.route('admin/task-edit', {path: '/admin/task-edit'});
  this.route('admin/users', {path: '/admin/users'});
  this.route('admin/graph', {path: '/admin/graph'});
  this.route('admin/school-edit', {path: '/admin/school-edit'});
  this.route('admin/user-edit', {path: '/admin/user-edit'});
  this.route('admin/vlny', {path: '/admin/vlny'});
  this.route('admin/vlna-edit', {path: '/admin/vlna-edit'});
  this.route('admin/achievements', {path: '/admin/achievements'});
  this.route('admin/achievement-edit', {path: '/admin/achievement-edit'});
	this.route('bad_url', { path: '/*badurl' }); // Catch everything else!
});

export default Router;
