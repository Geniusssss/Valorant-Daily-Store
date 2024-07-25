import tls from 'tls';

export function createRiotAuthSSLContext() {
    const options = {
        minVersion: 'TLSv1',
        ciphers: [
            'TLS_CHACHA20_POLY1305_SHA256',
            'TLS_AES_128_GCM_SHA256',
            'TLS_AES_256_GCM_SHA384',
            'ECDHE-ECDSA-CHACHA20-POLY1305',
            'ECDHE-RSA-CHACHA20-POLY1305',
            'ECDHE-ECDSA-AES128-GCM-SHA256',
            'ECDHE-RSA-AES128-GCM-SHA256',
            'ECDHE-ECDSA-AES256-GCM-SHA384',
            'ECDHE-RSA-AES256-GCM-SHA384',
            'ECDHE-ECDSA-AES128-SHA',
            'ECDHE-RSA-AES128-SHA',
            'ECDHE-ECDSA-AES256-SHA',
            'ECDHE-RSA-AES256-SHA',
            'AES128-GCM-SHA256',
            'AES256-GCM-SHA384',
            'AES128-SHA',
            'AES256-SHA',
            'DES-CBC3-SHA'
        ].join(':'),
        sigalgs: [
            'ecdsa_secp256r1_sha256',
            'rsa_pss_rsae_sha256',
            'rsa_pkcs1_sha256',
            'ecdsa_secp384r1_sha384',
            'rsa_pss_rsae_sha384',
            'rsa_pkcs1_sha384',
            'rsa_pss_rsae_sha512',
            'rsa_pkcs1_sha512',
            'rsa_pkcs1_sha1'
        ].join(':')
    };
    return tls.createSecureContext(options);
}
