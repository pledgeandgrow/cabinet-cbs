# Configuration des Emails pour Cabinet CBS

Ce document explique comment configurer l'envoi d'emails pour le formulaire de contact du site Cabinet CBS.

## Variables d'Environnement

Pour configurer l'envoi d'emails en production, vous devez définir les variables d'environnement suivantes dans votre environnement de déploiement (Vercel ou autre):

```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre-email@example.com
EMAIL_PASSWORD=votre-mot-de-passe
EMAIL_FROM=contact@cabinet-cbs.com
EMAIL_TO=bousid@yahoo.fr
```

## Configuration pour Différents Fournisseurs d'Email

### Gmail

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

**Note**: Pour Gmail, vous devrez créer un "mot de passe d'application" dans les paramètres de sécurité de votre compte Google.

### Outlook/Office 365

```
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### OVH

```
EMAIL_HOST=ssl0.ovh.net
EMAIL_PORT=587
EMAIL_SECURE=false
```

## Configuration sur Vercel

1. Accédez au tableau de bord de votre projet sur Vercel
2. Allez dans "Settings" > "Environment Variables"
3. Ajoutez chaque variable d'environnement mentionnée ci-dessus
4. Cliquez sur "Save" pour enregistrer les modifications
5. Redéployez votre application pour appliquer les changements

## Mode Développement

En mode développement, si aucune variable d'environnement n'est définie, l'application utilisera automatiquement [Ethereal Email](https://ethereal.email/) pour tester l'envoi d'emails. Les emails ne seront pas réellement envoyés, mais vous pourrez les visualiser via l'URL fournie dans la console.

## Dépannage

Si vous rencontrez des problèmes avec l'envoi d'emails:

1. Vérifiez que les informations SMTP sont correctes
2. Assurez-vous que le compte email utilisé autorise l'envoi via SMTP
3. Pour Gmail, vérifiez que vous utilisez un "mot de passe d'application" et non votre mot de passe principal
4. Vérifiez les journaux de l'application pour les messages d'erreur spécifiques
