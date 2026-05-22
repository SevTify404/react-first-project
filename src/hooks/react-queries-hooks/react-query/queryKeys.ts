
const createBaseKey = (entityName: string) => [entityName];

/**
 * On va générer les clés de requête pour une entité spécifique.
 *
 * Exemple d'utilisation avec une entité "users"  :
 * const userKeys = createEntityKeys('users');
 * userKeys.all()          // ['users']
 * userKeys.lists()        // ['users', 'list']
 */
export const createEntityKeys = (entityName: string) => ({
  // Clé pour toutes les opérations liées à l'entité.
  all: () => [entityName] as const,

  // Clé pour les listes d'entités, avec des filtres optionnels
  // comme par exemple les utilisateur active.
  lists: (filters?: Record<string, unknown>) =>
    [...createBaseKey(entityName), "list", filters].filter(Boolean),

  // Clé pour une entité spécifique par son ID.
  detail: (id: string | number) =>
    [...createBaseKey(entityName), "detail", id] as const,

  // Clé pour l'ajout d'une entité.
  add: () => [...createBaseKey(entityName), "add"] as const,

  // Clé pour la mise à jour d'une entité spécifique.
  update: (id: string | number) =>
    [...createBaseKey(entityName), "update", id] as const,

  // Clé pour la suppression d'une entité spécifique.
  delete: (id: string | number) =>
    [...createBaseKey(entityName), "delete", id] as const,
});
