import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Lazy Pages
const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const HomePage = React.lazy(() => import('../pages/HomePage'));
const CreateBlogPage = React.lazy(() => import('../pages/CreateBlogPage'));
const BlogDetailsPage = React.lazy(() => import('../pages/BlogDetailsPage'));

const Routes = () => {
  return (
    <Suspense fallback='...Loading'>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/login' />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/home'>
          <HomePage />
        </Route>

        <Route path='/create-blog'>
          <CreateBlogPage />
        </Route>

        <Route path='/blog:detail'>
          <BlogDetailsPage />
        </Route>
        
        <Route path='/*'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;