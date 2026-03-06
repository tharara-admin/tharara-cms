import type { Schema, Struct } from '@strapi/strapi';

export interface ProductCategorySelector extends Struct.ComponentSchema {
  collectionName: 'components_product_category_selectors';
  info: {
    description: 'Select a category from predefined jewelry categories';
    displayName: 'Category Selector';
  };
  attributes: {
    value: Schema.Attribute.Enumeration<
      [
        'Rings',
        'Necklaces',
        'Earrings',
        'Bracelets',
        'Anklets',
        'Pendants',
        'Chains',
        'Bangles',
        'Sets',
        "Men's Jewelry",
        'Bridal Jewelry',
        'Antique Jewelry',
        'Custom Jewelry',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface ProductVariantSelector extends Struct.ComponentSchema {
  collectionName: 'components_product_variant_selectors';
  info: {
    description: 'Product variant with stock and pricing information';
    displayName: 'Variant Selector';
  };
  attributes: {
    basePrice: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    plating: Schema.Attribute.Enumeration<
      [
        'Gold_14K',
        'Gold_18K',
        'Gold_22K',
        'Gold_24K',
        'Silver',
        'White_Gold',
        'Rose_Gold',
        'Gold',
      ]
    > &
      Schema.Attribute.Required;
    salePrice: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stockPrice: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    stockQuantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    stoneColor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    stoneType: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    stoneWeight: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    variantSku: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.category-selector': ProductCategorySelector;
      'product.variant-selector': ProductVariantSelector;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
