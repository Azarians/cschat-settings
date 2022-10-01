import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Loader } from './components/loader/Loader';
import { SideMenu } from './components/sideMenu/SideMenu';
import { APP_PATHS } from './helpers/constants/commons';
import { useSettingsAutoSave } from './hooks/useSettingsAutoSave';
import { useUndoRedoCHanges } from './hooks/useUndoRedoChanges';
import { Design } from './pages/design/Main';
import { Container } from './pages/design/subPages/Container';
import { Header } from './pages/design/subPages/Header';
import { Messages } from './pages/design/subPages/Messages';
import { MinimizedChat } from './pages/design/subPages/MinimizedChat';
import { Display } from './pages/display/Main';
import { Localize } from './pages/localize/Main';
import { Main } from './pages/main/Main';
import { AuthorizationRules, BlackList, Security } from './pages/security/Main';
import { Support } from './pages/support/Main';
import { Texts } from './pages/texts/Main';
import { Upgrade } from './pages/upgrade/Main';
import { selectShowAppLoader } from './store/reducers/loader/selectors';
import { authorizeChatRequested } from './store/sagas/chat/actionCreators';
import { CircularProgress } from '@mui/material';
import './assets/css/globals.css';
import './assets/css/material.css';

type T_Props = {};

const App: FC<T_Props> = () => {
	const dispatch = useDispatch();
	const showLoader = useSelector(selectShowAppLoader);

	useSettingsAutoSave();
	useUndoRedoCHanges();

	useEffect(() => {
		dispatch(authorizeChatRequested());
	}, []);

	if (showLoader) return <Loader />;

	return (
		<BrowserRouter>
			<Suspense fallback={<CircularProgress />}>
				<div className='app-content'>
					<Routes>
						<Route
							path='/*'
							element={<SideMenu />}
						/>
					</Routes>
					<div className='page-wrapper'>
						<Routes>
							<Route path='/*'>
								<Route
									path={APP_PATHS.main}
									element={<Main />}
								/>
								<Route
									path={APP_PATHS.localize}
									element={<Localize />}
								/>
								<Route path={APP_PATHS.security.index}>
									<Route
										index
										element={<Security />}
									/>
									<Route
										path={APP_PATHS.security.authorizationRules}
										element={<AuthorizationRules />}
									/>
									<Route
										path={APP_PATHS.security.blackList}
										element={<BlackList />}
									/>
								</Route>
								<Route
									path={APP_PATHS.display}
									element={<Display />}
								/>
								<Route path={APP_PATHS.design.index}>
									<Route
										index
										element={<Design />}
									/>
									<Route
										path={APP_PATHS.design.container}
										element={<Container />}
									/>
									<Route
										path={APP_PATHS.design.header}
										element={<Header />}
									/>
									<Route
										path={APP_PATHS.design.messages}
										element={<Messages />}
									/>
									<Route
										path={APP_PATHS.design.minimizedChat}
										element={<MinimizedChat />}
									/>
								</Route>
								<Route
									path={APP_PATHS.texts}
									element={<Texts />}
								/>
								<Route
									path={APP_PATHS.support}
									element={<Support />}
								/>
								<Route
									path={APP_PATHS.upgrade}
									element={<Upgrade />}
								/>
								<Route
									path='*'
									element={<Navigate to={`/${APP_PATHS.main}`} />}
								/>
							</Route>
						</Routes>
					</div>
				</div>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
