<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    WeChat 缓存类
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/10/19
 */

namespace app\common\wechat;

use Psr\SimpleCache\CacheInterface;

class Cache implements CacheInterface
{
    /**
     * 缓存对象
     * @var \think\Cache|null
     */
    protected $cache = null;

    /**
     * Cache constructor.
     * @access public
     * @param \think\Cache $cache
     */
    public function __construct(\think\Cache $cache)
    {
        $this->cache = $cache;
    }

    public function get($key, $default = null)
    {
        return $this->cache->get($key, $default);
    }

    public function set($key, $value, $ttl = null)
    {
        return $this->cache->set($key, $value, $ttl);
    }

    public function delete($key)
    {
        return $this->cache->delete($key);
    }

    public function clear()
    {
        return $this->cache->clear();
    }

    public function getMultiple($keys, $default = null)
    {
    }

    public function setMultiple($values, $ttl = null)
    {
    }

    public function deleteMultiple($keys)
    {
    }

    public function has($key)
    {
        return $this->cache->has($key);
    }
}