<?php
/*
 * This file is part of the Sulu CMS.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Component\Content;

use PHPCR\NodeInterface;

abstract class SimpleContentType implements ContentTypeInterface
{
    /**
     * @var string
     */
    private $name;

    function __construct($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    /**
     * reads the value for given property out of the database + sets the value of the property
     * @param NodeInterface $node
     * @param PropertyInterface $property
     * @return mixed
     */
    public function get(NodeInterface $node, PropertyInterface $property)
    {
        $value = $node->getPropertyValue($property->getName());
        $property->setValue($value);

        return $value;
    }

    /**
     * save the value from given property
     * @param NodeInterface $node
     * @param PropertyInterface $property
     * @return mixed
     */
    public function set(NodeInterface $node, PropertyInterface $property)
    {
        $node->setProperty($property->getName(), $property->getValue());
    }

    /**
     * returns type of ContentType
     * PRE_SAVE or POST_SAVE
     * @return int
     */
    public function getType()
    {
        return ContentTypeInterface::PRE_SAVE;
    }

    /**
     * magic getter for twig templates
     * @param $property
     * @return null
     */
    public function __get($property)
    {
        if (method_exists($this, 'get' . ucfirst($property))) {
            return $this->{'get' . ucfirst($property)}();
        } else {
            return null;
        }
    }
}
