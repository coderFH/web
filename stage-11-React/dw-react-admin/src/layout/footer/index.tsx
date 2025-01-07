import stytles from './index.module.less';

const Footer: React.FC = () => {
    return (
        <footer className={stytles.footer}>
            <div>
                <a
                    href="https://www.baidu.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    React19+TS开发通用后台
                </a>
                <span className="gutter">|</span>
                <a
                    href="https://www.baidu.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Vue3+TS开发通用后台全栈后台
                </a>
            </div>
            <div>Copyright 企业级互联网React18通用后台 All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;
