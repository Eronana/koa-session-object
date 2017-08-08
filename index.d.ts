import * as Koa from 'koa';

declare namespace session {
    interface sessionConfig {
        /**
         * cookie key (default is koa:sess)
         */
        key?: string;

        /**
         * maxAge in ms (default is 1 days)
         * 'session' will result in a cookie that expires when session/browser is closed
         * Warning: If a session cookie is stolen, this cookie will never expire
         */
        maxAge?: number | 'session';

        /**
         * can overwrite or not (default true)
         */
        overwrite?: boolean;

        /**
         * httpOnly or not (default true)
         */
        httpOnly?: boolean;

        /**
         * signed or not (default true)
         */
        signed?: boolean;
    }

}

declare function session(CONFIG: session.sessionConfig): Koa.Middleware;

export = session;