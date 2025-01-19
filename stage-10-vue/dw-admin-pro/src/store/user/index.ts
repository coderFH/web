import { defineStore } from 'pinia';
import pinia from '@/store';
import { userLogin, refreshUserInfo } from '@/api/user';
import router from '@/router';
import { error } from 'console';
export interface UserState {
    username: string;
    accessToken: string;
    refreshToken?: string;
    roles: Array<string>;
}
export const useUserStoreHook = defineStore('userInfo', {
    state: (): UserState => ({
        username: '大伟',
        accessToken: '',
        roles: ['common']
    }),
    getters: {},
    actions: {
        storeUserLogin(data) {
            return userLogin(data)
                .then((res) => {
                    this.username = res.username;
                    this.roles = res.roles;
                    this.accessToken = res.accessToken;
                    return res;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
        logout() {
            sessionStorage.removeItem('userInfo');
            this.accessToken = '';
            router.push('/login');
        },
        stroeRefreshUserInfo() {
            if (this.username == '大伟' && this.accessToken != '') {
                refreshUserInfo({
                    accessToken: this.accessToken
                })
                    .then((res) => {
                        this.username = res.username;
                        this.roles = res.roles;
                        this.accessToken = res.accessToken;
                    })
                    .catch(() => {
                        this.accessToken = '';
                    });
            }
        }
    },
    persist: {
        key: 'userInfo',
        storage: sessionStorage,
        paths: ['accessToken']
    }
});
export function useUserStore() {
    return useUserStoreHook(pinia);
}
