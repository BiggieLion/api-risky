'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api-risky documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' :
                                            'id="xs-controllers-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' :
                                        'id="xs-injectables-links-module-AuthModule-4225f7c86ea113a6d8886c11c77ab21b178e28e345d9653395c989836e26f505bba9c7cb02ff9092ad808d86bdacfe906ccc837b464a5e39bebb0344ff96c1ed"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreditsModule.html" data-type="entity-link" >CreditsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' : 'data-bs-target="#xs-controllers-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' :
                                            'id="xs-controllers-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' }>
                                            <li class="link">
                                                <a href="controllers/CreditsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' : 'data-bs-target="#xs-injectables-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' :
                                        'id="xs-injectables-links-module-CreditsModule-e2d0d9f2dce830c53834ab26846a4969f4f9e6a3de739ebe9dc9deb25dc4cdbc76f3d01c225764ccd693e9918b5fe2fff01904925ab87a5309000c9321f660c4"' }>
                                        <li class="link">
                                            <a href="injectables/CreditsRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditsRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreditsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentsModule.html" data-type="entity-link" >DocumentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' : 'data-bs-target="#xs-controllers-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' :
                                            'id="xs-controllers-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' : 'data-bs-target="#xs-injectables-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' :
                                        'id="xs-injectables-links-module-DocumentsModule-3b136a5e4da8daa279bff1db965bbaa03445334ffbd90bfd9562a73a05868cc152f57c76457551784a8ea0a2e53cb158e72e6f567b2ed0747cfc731f570f3add"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' : 'data-bs-target="#xs-controllers-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' :
                                            'id="xs-controllers-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' : 'data-bs-target="#xs-injectables-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' :
                                        'id="xs-injectables-links-module-NotificationsModule-25a1095bdc60dea6d54445eaac74489adf5f8ca3c9031a44b2ba252c83361448362c29870af7ca4af0bc97bd82bfa226ccef51bd1b36c8702f07e98cbf9e5ed9"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' :
                                            'id="xs-controllers-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' :
                                        'id="xs-injectables-links-module-UsersModule-5c41c7e5468acd4dfb697829f27f0114a5c9cc06b7e8a40fce9dfed8d2a11aff876fdf793baf67e3405f81bdb03fb6371ceeb1888242cf4549d7dec829e249d7"' }>
                                        <li class="link">
                                            <a href="injectables/UsersRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractDocument.html" data-type="entity-link" >AbstractDocument</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractRepository.html" data-type="entity-link" >AbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCreditDto.html" data-type="entity-link" >CreateCreditDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreditsDocument.html" data-type="entity-link" >CreditsDocument</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentsDocuments.html" data-type="entity-link" >DocumentsDocuments</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilesDto.html" data-type="entity-link" >FilesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotifyEmailDto.html" data-type="entity-link" >NotifyEmailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCreditDto.html" data-type="entity-link" >UpdateCreditDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadDocumentDto.html" data-type="entity-link" >UploadDocumentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDocument.html" data-type="entity-link" >UserDocument</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});